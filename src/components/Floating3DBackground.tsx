import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface Props {
    variant?: 'subtle' | 'prominent';
}

const Floating3DBackground: React.FC<Props> = ({ variant = 'subtle' }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const objects = gsap.utils.toArray('.obj-3d');

            objects.forEach((obj: any, i) => {
                // Randomize initial rotation for variety
                gsap.set(obj, {
                    rotationX: gsap.utils.random(0, 360),
                    rotationY: gsap.utils.random(0, 360),
                    rotationZ: gsap.utils.random(0, 360),
                });

                gsap.to(obj, {
                    x: `+=${gsap.utils.random(-100, 100)}`,
                    y: `+=${gsap.utils.random(-100, 100)}`,
                    rotationX: `+=${gsap.utils.random(-180, 180)}`,
                    rotationY: `+=${gsap.utils.random(-180, 180)}`,
                    rotationZ: `+=${gsap.utils.random(-180, 180)}`,
                    duration: gsap.utils.random(20, 35),
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut',
                    delay: i * -3,
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const opacityMultiplier = variant === 'subtle' ? 0.5 : 1;

    return (
        <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none z-0 mix-blend-screen" style={{ perspective: '1200px' }}>
            {/* Complex 3D Sphere Wireframe */}
            <div className="obj-3d absolute top-[10%] right-[5%] w-[30vh] h-[30vh] max-w-xs max-h-xs" style={{ transformStyle: 'preserve-3d', opacity: 0.15 * opacityMultiplier }}>
                <div className="absolute inset-0 border border-champagne rounded-full" style={{ transform: 'rotateX(0deg)' }}></div>
                <div className="absolute inset-0 border border-champagne rounded-full" style={{ transform: 'rotateX(45deg)' }}></div>
                <div className="absolute inset-0 border border-champagne rounded-full" style={{ transform: 'rotateX(90deg)' }}></div>
                <div className="absolute inset-0 border border-champagne rounded-full" style={{ transform: 'rotateX(135deg)' }}></div>
                <div className="absolute inset-0 border border-champagne rounded-full" style={{ transform: 'rotateY(45deg)' }}></div>
                <div className="absolute inset-0 border border-champagne rounded-full" style={{ transform: 'rotateY(135deg)' }}></div>
            </div>

            {/* Complex 3D Cube Wireframe */}
            <div className="obj-3d absolute top-[60%] left-[8%] w-32 h-32" style={{ transformStyle: 'preserve-3d', opacity: 0.2 * opacityMultiplier }}>
                <div className="absolute inset-0 border border-champagne" style={{ transform: 'translateZ(64px)' }}></div>
                <div className="absolute inset-0 border border-champagne" style={{ transform: 'rotateX(180deg) translateZ(64px)' }}></div>
                <div className="absolute inset-0 border border-champagne" style={{ transform: 'rotateX(90deg) translateZ(64px)' }}></div>
                <div className="absolute inset-0 border border-champagne" style={{ transform: 'rotateX(-90deg) translateZ(64px)' }}></div>
                <div className="absolute inset-0 border border-champagne" style={{ transform: 'rotateY(90deg) translateZ(64px)' }}></div>
                <div className="absolute inset-0 border border-champagne" style={{ transform: 'rotateY(-90deg) translateZ(64px)' }}></div>
            </div>

            {/* Floating 3D Pyramid / Diamond */}
            <div className="obj-3d absolute top-[30%] left-[75%] w-24 h-24" style={{ transformStyle: 'preserve-3d', opacity: 0.25 * opacityMultiplier }}>
                <div className="absolute inset-0 border border-champagne rotate-45" style={{ transform: 'rotateX(60deg) translateZ(20px)' }}></div>
                <div className="absolute inset-0 border border-champagne rotate-45" style={{ transform: 'rotateY(60deg) translateZ(20px)' }}></div>
            </div>

            {/* Small floating particles bringing depth */}
            <div className="obj-3d absolute bottom-[20%] left-[25%] w-1.5 h-1.5 bg-champagne rounded-full blur-[1px]" style={{ opacity: 0.4 * opacityMultiplier, transform: 'translateZ(100px)' }}></div>
            <div className="obj-3d absolute top-[40%] right-[35%] w-2 h-2 bg-champagne rounded-full blur-[2px]" style={{ opacity: 0.3 * opacityMultiplier, transform: 'translateZ(-150px)' }}></div>
            <div className="obj-3d absolute top-[75%] left-[45%] w-1 h-1 bg-champagne rounded-full" style={{ opacity: 0.5 * opacityMultiplier, transform: 'translateZ(200px)' }}></div>
            <div className="obj-3d absolute top-[15%] left-[35%] w-2 h-2 bg-champagne rounded-full blur-[1px]" style={{ opacity: 0.3 * opacityMultiplier, transform: 'translateZ(-50px)' }}></div>
        </div>
    );
};

export default Floating3DBackground;
