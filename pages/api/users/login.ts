import { NextApiRequest, NextApiResponse } from 'next';
import { dbCon } from '../../../models';
import { ResponseFunctions } from '../../../interfaces';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const method: keyof ResponseFunctions = req.method as keyof ResponseFunctions;
    const catcher = (error: Error) => res.status(400).json({ status: 0, error: error });
    const handleCase: ResponseFunctions = {
        GET: async (req: NextApiRequest, res: NextApiResponse) => {
            res.status(200).json({ status: false, err: 'Only POST Method is allowed' });
        },
        POST: async (req: NextApiRequest, res: NextApiResponse) => {
            const { email, password } = req.body;
            console.log(email);
            const { Accounts } = await dbCon();
            const account = await Accounts.findOne({ email: email, password: password }).catch(catcher);
            if (!account) {
                res.status(200).json({ status: 0, err: 'Account not found' });
            } else {
                res.status(200).json({ status: 1, accid: account._id, email: account.email, role: account.role });
            }
        },
    };

    const response = handleCase[method];
    if (response) response(req, res);
    else res.status(400).json({ status: 0, error: 'No Response for This Request' });
}
