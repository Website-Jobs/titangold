import { NextApiRequest, NextApiResponse } from 'next';
import { dbCon } from '../../../../models';
import { ResponseFunctions } from '../../../../interfaces';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const method: keyof ResponseFunctions = req.method as keyof ResponseFunctions;
    const catcher = (error: Error) => res.status(400).json({ status: 0, error: error });
    const handleCase: ResponseFunctions = {
        GET: async (req: NextApiRequest, res: NextApiResponse) => {
            const { id } = req.query;
            const { Partners } = await dbCon();
            const result = await Partners.findOne({ _id: id }).catch(catcher);
            res.status(200).json({
                status: 1,
                email: result.email,
                mobile: result.mobile,
                firstname: result.firstname,
                lastname: result.lastname,
                address: result.address,
                avatar: result.avatar,
                country: result.country,
                gold: result.gold,
                amount: result.amount,
                created: result.created,
            });
        },
    };
    const response = handleCase[method];
    if (response) response(req, res);
    else res.status(400).json({ status: 0, error: 'No Response for This Request' });
}
