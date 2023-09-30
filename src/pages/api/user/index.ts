import prisma from '../../../../lib/prisma';

// POST /api/user
export default async function handle(req, res) {

    const sessionId = req.cookies['next-auth.session-token'];
    const result = await prisma.user.create({
        data: {
            sessionId: sessionId
        },
    });
    res.json(result);
}
