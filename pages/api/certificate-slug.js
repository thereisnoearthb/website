import { getSlugByEmail } from "../../lib/api";

export default function handler(req, res) {
  return res.status(200).json(getSlugByEmail(req.body.email));
}
