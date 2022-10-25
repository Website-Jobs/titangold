import { NextApiRequest, NextApiResponse } from 'next';
import { dbCon } from '../../../models';
import { ResponseFunctions } from '../../../interfaces';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const method: keyof ResponseFunctions = req.method as keyof ResponseFunctions;
    const catcher = (error: Error) => res.status(400).json({ status: 0, error: error });
    const handleCase: ResponseFunctions = {
        GET: async (req: NextApiRequest, res: NextApiResponse) => {
            res.status(400).json({ status: false, err: 'Only POST Method is allowed' });
        },
        POST: async (req: NextApiRequest, res: NextApiResponse) => {

            const { firstname, lastname, mobile, email, country, address, gold, amount, created } = req.body;
            console.log(req.body);

            const { Partners } = await dbCon();
            const partnercreated = await Partners.create({

                email: email,
                firstname: firstname,
                lastname: lastname,
                mobile: mobile,
                address: address,
                country: country,
                gold: gold,
                amount: amount,
                created: created,

            }).catch(catcher);
            if (!partnercreated) {
                res.status(404).json({ status: 0, err: 'Error creating partner' });
            } else {
                res.status(200).json({ status: 1, id: partnercreated.id, email: partnercreated.email });
            }
        },
    };

    const response = handleCase[method];
    if (response) response(req, res);
    else res.status(400).json({ status: 0, error: 'No Response for This Request' });
}
