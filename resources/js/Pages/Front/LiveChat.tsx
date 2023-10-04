import React, { useEffect, useState, useRef, RefObject } from 'react';
import NavBar2 from '@/Components/Navbar/NabBar2';
import Footer from '../Footer/Footer';
import Talk from 'talkjs';

interface User {
    id: string;
    name: string;
    email: string;
    photoUrl: string;
    welcomeMessage: string;
    role: string;
}

const LiveChat = ({ auth }: any) => {
    const chatboxEl = useRef<HTMLDivElement>(null);
    const [talkLoaded, markTalkLoaded] = useState(false);

    useEffect(() => {
        Talk.ready
            .then(() => markTalkLoaded(true))
            .catch((error) => {
                console.error('Error loading TalkJS:', error);
            });
    }, []);

    useEffect(() => {
        if (talkLoaded && auth.user) {
            const currentUser = new Talk.User({
                id: auth.user.id,
                name: auth.user.first_name,
                email: auth.user.email,
                photoUrl: auth?.user ? '/storage/' + auth.user.image : 'N/A',
                welcomeMessage: 'Hello!',
                role: 'default',
            });

            const otherUser = new Talk.User({
                id: '1',
                name: 'Admin',
                email: 'admin@example.com',
                photoUrl: 'https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png',
                welcomeMessage: 'Hello!',
                role: 'default',
            });

            const session = new Talk.Session({
                appId: 'txSJO2gM',
                me: currentUser,
            });

            const conversationId = Talk.oneOnOneId(currentUser, otherUser);
            const conversation = session.getOrCreateConversation(conversationId);
            conversation.setParticipant(currentUser);
            conversation.setParticipant(otherUser);

            const chatbox = session.createInbox({ selected: conversation });
            chatbox.mount(chatboxEl.current!);

            return () => session.destroy();
        }
    }, [talkLoaded]);

    return (
        <div>
            <NavBar2 auth={auth} className='relative z-10' />

            {!auth?.user && <div style={{ width: '100%', height: '43vh' }} className='text-4xl flex items-center justify-center '> <span className='animate-bounce'>Please login first!</span></div>}
            {auth.user && <div className='mt-3' ref={chatboxEl} style={{ width: '100%', height: '500px' }} />}

            <Footer auth={auth} />
        </div>
    );
};

export default LiveChat;
