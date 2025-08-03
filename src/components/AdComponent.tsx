import React, { useEffect, useRef } from 'react';

interface AdComponentProps {
    adKey: string;
    adCode: string;
    className?: string;
}

const AdComponent: React.FC<AdComponentProps> = ({ adKey, adCode, className }) => {
    const adRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const adContainer = adRef.current;
        if (adContainer) {
            adContainer.innerHTML = adCode;
            const scripts = Array.from(adContainer.getElementsByTagName('script'));
            scripts.forEach(oldScript => {
                const newScript = document.createElement('script');
                Array.from(oldScript.attributes).forEach(attr => {
                    newScript.setAttribute(attr.name, attr.value);
                });
                newScript.appendChild(document.createTextNode(oldScript.innerHTML));
                oldScript.parentNode?.replaceChild(newScript, oldScript);
            });
        }
    }, [adKey, adCode]);

    return <div ref={adRef} key={adKey} className={className}></div>;
};

export default AdComponent;