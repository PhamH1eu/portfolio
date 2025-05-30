import * as React from 'react';

interface EmailTemplateProps {
    firstName: string;
    message?: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    firstName,
    message,
}) => {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
            <h1 style={{ color: '#4A90E2' }}>From {firstName},</h1>
            <p>
                You have received a new message from your CV contact website.
            </p>
            {message && (
                <div>
                    <p>{message}</p>
                </div>
            )}
        </div>
    );
};