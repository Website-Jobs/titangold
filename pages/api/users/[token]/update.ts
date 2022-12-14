import { NextApiRequest, NextApiResponse } from "next";
import { dbCon } from "../../../../models";
import { ResponseFunctions } from "../../../../interfaces";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const method: keyof ResponseFunctions = req.method as keyof ResponseFunctions;
  const catcher = (error: Error) =>
    res.status(400).json({ status: 0, error: error });
  const handleCase: ResponseFunctions = {
    GET: async (req: NextApiRequest, res: NextApiResponse) => {
      res
        .status(200)
        .json({ status: false, err: "Only POST Method is allowed" });
    },
    POST: async (req: NextApiRequest, res: NextApiResponse) => {
      const { token } = req.query;
      const {
        firstname,
        lastname,
        email,
        mobile,
        address,
        country,
        password,
        avatar,
        gold,
        amount,
        created,
      } = req.body;

      console.log(req.body);

      const { Accounts } = await dbCon();
      const account = await Accounts.updateOne(
        { _id: token },
        {
          firstname: firstname,
          lastname: lastname,
          email: email,
          mobile: mobile,
          address: address,
          country: country,
          password: password,
          avatar: avatar,
          gold: gold,
          amount: amount,
          created: created,
        }
      ).catch(catcher);
      if (account) {
        res.status(200).json({
          status: 1,
          data: account,
        });
      } else {
        res.status(404).json({ status: 0, err: "Account not found" });
      }
    },
  };

  const response = handleCase[method];
  if (response) response(req, res);
  else res.status(400).json({ error: "No Response for This Request" });
}
