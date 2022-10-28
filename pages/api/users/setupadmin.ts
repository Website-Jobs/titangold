import { NextApiRequest, NextApiResponse,PageConfig } from 'next';
import { dbCon } from '../../../models';
import { ResponseFunctions } from '../../../interfaces';


export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const method: keyof ResponseFunctions = req.method as keyof ResponseFunctions;
    const catcher = (error: Error) => res.status(400).json({ status: 0, error: error });
    const handleCase: ResponseFunctions = {
        POST: async (req: NextApiRequest, res: NextApiResponse) => {
            res.status(400).json({ status: false, err: 'Only POST Method is allowed' });
        },
        GET: async (req: NextApiRequest, res: NextApiResponse) => {
            const { Accounts } = await dbCon();
            const created = await Accounts.create({
                email: 'admin@titangoldllc.com',
                firstname: 'Titan',
                lastname: 'Gold',
                mobile: '080123456789',
                address: '203 Al Mankhool Street Opposite Al Khaleej Center Diana Dubai',
                country: 'Dubai',
                password: 'admin',
                role: 'admin'
            }).catch(catcher);
            if (!created) {
                res.status(404).json({ status: 0, err: 'Error creating account' });
            } else {
                res.status(200).json({ status: 1, accid: created.id, email: created.email });
            }
        },
    };
    const response = handleCase[method];
    if (response) response(req, res);
    else res.status(400).json({ status: 0, error: 'No Response for This Request' });
}
