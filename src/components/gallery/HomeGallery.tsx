'use client';
import Image from 'next/image';
import React from 'react';

export default function HomeGallery() {
  // const [movingRight, setMovingRight] = React.useState(true);

  React.useEffect(() => {
    const track = document.getElementById('photo-track')!;

    window.onmousedown = (e) => {
      track.dataset.mouseDownAt = e.clientX.toString();
      // track.style.animationPlayState = 'paused';
    };

    window.onmousemove = (e) => {
      if (track.dataset.mouseDownAt === '0') return;

      const mouseDelta = parseFloat(track.dataset.mouseDownAt!) - e.clientX,
        maxDelta = window.innerWidth / 2;

      const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained =
          parseFloat(track.dataset.prevPercentage!) + percentage,
        nextPercentage = Math.max(
          Math.min(nextPercentageUnconstrained, 0),
          -100,
        );

      track.dataset.percentage = nextPercentage.toString();

      track.animate(
        {
          transform: `translate(${nextPercentage}%, -50%)`,
        },
        { duration: 1200, fill: 'forwards' },
      );

      Array.from(track.getElementsByClassName('photo')).forEach((photo) => {
        photo.animate(
          {
            objectPosition: `${100 + nextPercentage}% center`,
          },
          { duration: 1200, fill: 'forwards' },
        );
      });
    };

    window.onmouseup = () => {
      track.dataset.mouseDownAt = '0';
      track.dataset.prevPercentage = track.dataset.percentage;
      // track.style.animationPlayState = 'running';
    };
  }, []);

  return (
    <div id="home-gallery" className="w-100vw h-100vh overflow-hidden">
      <div id="photo-track" data-mouse-down-at="0" data-prev-percentage="0">
        <Image
          width={800}
          height={800}
          alt="la-rocque-photo"
          className="photo"
          src="/home_gallery/la_rocque.jpg"
          draggable={false}
        />
        <Image
          width={800}
          height={800}
          alt="corbiere-photo"
          className="photo"
          src={'/home_gallery/corbiere.jpg'}
          draggable={false}
        />
        <Image
          width={800}
          height={800}
          alt="bonne-nuit-photo"
          className="photo"
          src={'/home_gallery/bonne_nuit.jpg'}
          draggable={false}
        />
        <Image
          width={800}
          height={800}
          alt="bouley-bay-photo"
          className="photo"
          src={'/home_gallery/bouley_bay.jpg'}
          draggable={false}
        />
        <Image
          width={800}
          height={800}
          alt="market-photo"
          className="photo"
          src={'/home_gallery/market.jpg'}
          draggable={false}
        />
        <Image
          width={800}
          height={800}
          alt="gorey-castle-photo"
          className="photo"
          src={'/home_gallery/gorey_castle.jpg'}
          draggable={false}
        />
      </div>
    </div>
  );
}
