import prisma from '../../../lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, secret } = req.body;
  console.log(email, secret)
  if (req.method !== 'POST') {
    console.log('Method not allowed')
    return res.status(403).json({ message: 'Method not allowed' });
  }
  if (secret !== process.env.AUTH0_HOOK_SECRET) {
    console.log('You must provide the secret')
    return res.status(403).json({ message: `You must provide the secret` });
  }
  if (email) {
    console.log(`User with email: ${email} has been created successfully!`)
    await prisma.user.create({
      data: { email },
    });
    return res.status(200).json({
      message: `User with email: ${email} has been created successfully!`,
    });
  }
};

export default handler;