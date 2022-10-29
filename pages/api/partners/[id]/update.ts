import { NextApiRequest, NextApiResponse } from 'next';
import { dbCon } from '../../../../models';
import { ResponseFunctions } from '../../../../interfaces';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const method: keyof ResponseFunctions = req.method as keyof ResponseFunctions;
    const catcher = (error: Error) => res.status(400).json({ status: 0, error: error });
    const handleCase: ResponseFunctions = {
        GET: async (req: NextApiRequest, res: NextApiResponse) => {
            res.status(200).json({ status: false, err: 'Only POST Method is allowed' });
        },
        POST: async (req: NextApiRequest, res: NextApiResponse) => {

            const { id } = req.query;
            const { firstname, lastname, mobile, email, country, address, gold, amount, created , avatar} = req.body;

            const { Partners } = await dbCon();
            const partner = await Partners.updateOne(
                { _id: id },
                {
                    firstname: firstname,
                    lastname: lastname,
                    email: email,
                    mobile: mobile,
                    address: address,
                    country: country,
                    gold: gold,
                    amount: amount,
                    created: created,
                    avatar:avatar
                }
            ).catch(catcher);
            if (partner) {
                res.status(200).json({
                    status: 1,
                    data: partner,
                });
            } else {
                res.status(404).json({ status: 0, err: 'Account not found' });
            }
        },
    };

    const response = handleCase[method];
    if (response) response(req, res);
    else res.status(400).json({ error: 'No Response for This Request' });
}
