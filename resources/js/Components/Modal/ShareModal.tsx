import React, { useState, useEffect } from "react";
import Copy from "@/Assets/SocialMeiaIcons/copy.png"
import Email from "@/Assets/SocialMeiaIcons/gmail.png"
import Linkdin from "@/Assets/SocialMeiaIcons/linkedin.png"
import facebook from "@/Assets/SocialMeiaIcons/facebook.png"
import Meesenger from "@/Assets/SocialMeiaIcons/messenger.png"
import whatsapp from "@/Assets/SocialMeiaIcons/whatsapp.png"
import Twitter from "@/Assets/SocialMeiaIcons/twitter.png"
import More from "@/Assets/SocialMeiaIcons/menu.png"
import checked from "@/Assets/SocialMeiaIcons/check-mark.png"

interface ShareModalProps {
    isOpen: boolean;
    onClose: () => void;

}


const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose }) => {
    const [isCopied, setIsCopied] = useState(false);

    const copyLinkToClipboard = () => {
        const currentURL = window.location.href;
        const tempTextArea = document.createElement("textarea");
        tempTextArea.value = currentURL;
        document.body.appendChild(tempTextArea);
        tempTextArea.select();
        document.execCommand("copy");
        document.body.removeChild(tempTextArea);
        setIsCopied(true);
    };

    const shareViaEmail = () => {
        const currentURL = window.location.href;
        const subject = "Check out this link!";
        const body = `I thought you might be interested in this link:\n${currentURL}`;
        const mailtoLink = `mailto:?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoLink;
    };

    const shareOnTwitter = () => {
        const currentURL = window.location.href;
        const tweetText = "Check out this link:";
        const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
            tweetText
        )}&url=${encodeURIComponent(currentURL)}`;

        window.open(tweetUrl, "_blank");
    };

    const shareOnLinkedIn = () => {
        const currentURL = window.location.href;
        const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
            currentURL
        )}`;

        window.open(linkedInUrl, "_blank");
    };

    const shareOnFacebook = () => {
        const currentURL = window.location.href;
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            currentURL
        )}`;

        window.open(facebookUrl, "_blank");
    };

    const shareOnMessenger = () => {
        const currentURL = window.location.href;
        const messengerUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            currentURL
        )}`;

        window.open(messengerUrl, "_blank");
    };

    const shareOnWhatsApp = () => {
        const currentURL = window.location.href;
        const whatsAppUrl = `https://web.whatsapp.com/=${encodeURIComponent(
            currentURL
        )}`;

        window.open(whatsAppUrl, "_blank");
    };

    const openWindowsStore = () => {
        window.location.href = "ms-windows-store://home";
    };


    useEffect(() => {
        let timeout: string | number | NodeJS.Timeout | undefined;
        if (isCopied) {
            timeout = setTimeout(() => {
                setIsCopied(false);
            }, 2000);
        }

        return () => clearTimeout(timeout);
    }, [isCopied]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="modal-overlay absolute inset-0 bg-gray-500 opacity-75"></div>
            
            <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                <div className="modal-content py-4 text-left px-6">
                    <div className="flex justify-end">
                        <button onClick={onClose} className="text-black close-modal">
                            <svg
                                className="fill-current text-black"
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                            >
                                <path
                                    d="M6.364 6l-3.535-3.536a1 1 0 1 1 1.415-1.415L7.778 4.585l3.536-3.536a1 1 0 0 1 1.415 1.415L9.192 6l3.536 3.536a1 1 0 0 1-1.415 1.415L7.778 7.415l-3.536 3.536a1 1 0 1 1-1.415-1.415L6.364 6z"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <h1 className="text-xl font-semibold mb-5">Share this Car</h1>

                    <div className="grid grid-cols-1 md:gap-3 md:grid-cols-2 mb-10">
                        <div className="border rounded-xl flex cursor-pointer  space-x-3 p-2 md:p-3" onClick={copyLinkToClipboard}>
                            <img src={Copy} alt="" className="w-7 h-7" />
                            <p className="font-semibold">Copy Link</p>
                        </div>
                        <div className="border rounded-xl cursor-pointer flex space-x-3 p-2 md:p-3" onClick={shareViaEmail}>
                            <img src={Email} alt="" className="w-7 h-7" />
                            <p className="font-semibold">Email</p>
                        </div>
                        <div className="border rounded-xl flex cursor-pointer space-x-3 p-2 md:p-3" onClick={shareOnTwitter}>
                            <img src={Twitter} alt="" className="w-7 h-7" />
                            <p className="font-semibold">Twitter</p>
                        </div>
                        <div className="border rounded-xl cursor-pointer flex space-x-3 p-2 md:p-3" onClick={shareOnLinkedIn}>
                            <img src={Linkdin} alt="" className="w-7 h-7" />
                            <p className="font-semibold">Linkedin</p>
                        </div>
                        <div className="border rounded-xl cursor-pointer flex space-x-3 p-2 md:p-3" onClick={shareOnFacebook}>
                            <img src={facebook} alt="" className="w-7 h-7" />
                            <p className="font-semibold">Facebook</p>
                        </div>
                        <div className="border rounded-xl flex cursor-pointer space-x-3 p-2 md:p-3" onClick={shareOnMessenger}>
                            <img src={Meesenger} alt="" className="w-7 h-7" />
                            <p className="font-semibold">Messenger</p>
                        </div>
                        <div className="border rounded-xl cursor-pointer flex space-x-3 p-2 md:p-3" onClick={shareOnWhatsApp}>
                            <img src={whatsapp} alt="" className="w-7 h-7" />
                            <p className="font-semibold">Whatsapp</p>
                        </div>
                        <div className="border rounded-xl flex cursor-pointer space-x-3 p-2 md:p-3" onClick={openWindowsStore}>
                            <img src={More} alt="" className="w-7 h-7" />
                            <p className="font-semibold">More Options</p>
                        </div>

                    </div>

                    {isCopied && (
                        <div
                            className="absolute left-1/2 transform -translate-x-1/2 bg-white border text-black content-end rounded-md shadow-md flex items-center"
                            style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}
                        >
                            <img src={checked} alt="Check Icon" className="w-6 h-6 mr-2" />
                            <span>Link Copied!</span>
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
};

export default ShareModal;
