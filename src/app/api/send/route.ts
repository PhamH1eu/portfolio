import { EmailTemplate } from '@/shared/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend("re_enFP59LA_CtW37PDac1wFmAV4ok8CbADP");

export const POST = async (request: Request) => {
    if (request.method === 'OPTIONS') {
        return new Response(null, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                'Access-Control-Allow-Credentials': 'true',
            },
        });
    }
    if (request.method !== 'POST') {
        return Response.json({ error: 'Method not allowed POST' }, { status: 405 });
    }

    try {
        const body = await request.json();
        if (!body || !body.name || !body.email || !body.message) {
            return Response.json({ error: 'Invalid request body' }, { status: 400 });
        }
        const { data, error } = await resend.emails.send({
            from: `${body.name} <onboarding@resend.dev>`,
            replyTo: body.email,
            to: ['hieupham110303@gmail.com'],
            subject: 'CV Question',
            //@ts-expect-error 12312
            react: EmailTemplate({ firstName: body.name, message: body.message })
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json(data);
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}