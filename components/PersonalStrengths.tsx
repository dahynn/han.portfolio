'use client';

import { useEffect, useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';

const approaches = [
  { business: '고객지향', organization: '몰입', message: '고객의 첫 클릭부터 처리 결과까지, 끊기는 지점을 끝까지 확인합니다.' },
  { business: '새로운 가치', organization: '투명', message: '화면과 서버의 결과를 함께 확인하고, 판단의 근거를 남깁니다.' },
  { business: '더 나은 방식', organization: '존중', message: '다음 사람이 이해하고 고칠 수 있도록, 더 나은 구조로 풀어냅니다.' },
  { business: '차별적 경쟁우위', organization: '스피드', message: '작게 구현해 빠르게 확인하고, 개선한 결과를 끝까지 검증합니다.' },
];

export function PersonalStrengths() {
  const [selected, setSelected] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotion = () => setReducedMotion(media.matches);
    updateMotion();
    media.addEventListener('change', updateMotion);
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.2 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { media.removeEventListener('change', updateMotion); observer.disconnect(); };
  }, []);

  useEffect(() => {
    if (paused || reducedMotion || !visible) return;
    const timer = window.setInterval(() => setSelected((value) => (value + 1) % approaches.length), 4000);
    return () => window.clearInterval(timer);
  }, [paused, reducedMotion, visible, selected]);


  return (
    <section
      ref={sectionRef}
      className="hms-principles"
      aria-labelledby="hms-title"
    >
      <header className="hms-principles-heading">
        <h2 id="hms-title">HMS, 개발의 기준으로</h2>
        <a href="https://hansol.com/home/hansol/hansol01.jsp" target="_blank" rel="noreferrer">Hansol Management System</a>
        {!reducedMotion && <button className="hms-autoplay" type="button" aria-label={paused ? 'HMS 조합 자동 전환 재생' : 'HMS 조합 자동 전환 일시정지'} aria-pressed={paused} onClick={() => setPaused((value) => !value)}>{paused ? <Play size={12} aria-hidden="true" /> : <Pause size={12} aria-hidden="true" />}</button>}
      </header>
      <div className="hms-principles-groups">
        <fieldset className="hms-principles-group hms-business">
          <legend>사업원칙</legend>
          <div className="hms-principles-options">
            {approaches.map((item, index) => <button key={item.business} type="button" aria-pressed={selected === index} onClick={() => setSelected(index)}><span className="hms-principle-label">{item.business}</span></button>)}
          </div>
        </fieldset>
        <fieldset className="hms-principles-group hms-organization">
          <legend>조직원칙</legend>
          <div className="hms-principles-options">
            {approaches.map((item, index) => <button key={item.organization} type="button" aria-pressed={selected === index} onClick={() => setSelected(index)}><span className="hms-principle-label">{item.organization}</span></button>)}
          </div>
        </fieldset>
      </div>
      <div className="hms-approach" aria-label="유다현의 개발 방식">
        <p key={selected}>{approaches[selected].message}</p>
      </div>
    </section>
  );
}
