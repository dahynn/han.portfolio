'use client';

/* oxlint-disable next/no-img-element -- 선택한 HMS 이미지의 투명도와 원본 비율을 정적 Pages에서도 유지합니다. */

import { useState } from 'react';
import { ArrowUpRight, Pause, Play } from 'lucide-react';

export function PersonalStrengths() {
  const [paused, setPaused] = useState(false);

  return (
    <section className="hms-cover" aria-labelledby="hms-title" data-paused={paused}>
      <figure className="hms-figure">
        <button
          className="hms-diagram-control"
          type="button"
          aria-label={paused ? 'HMS 도표 움직임 재생' : 'HMS 도표 움직임 정지'}
          aria-pressed={paused}
          aria-describedby="hms-motion-hint"
          onClick={() => setPaused((value) => !value)}
        >
          <img
            className="hms-diagram-image"
            src="/assets/hms-orbit.png"
            width="1254"
            height="1254"
            decoding="async"
            draggable={false}
            alt="한솔경영체계 HMS. 바깥의 사업원칙: 차별적 경쟁우위, 고객지향, 새로운 가치, 더 나은 방식. 안쪽의 조직원칙: 몰입, 투명, 존중, 스피드."
          />
        </button>
        <figcaption id="hms-motion-hint" className="hms-motion-hint">
          {paused ? <Play size={10} aria-hidden="true" /> : <Pause size={10} aria-hidden="true" />}
          {paused ? <span>눌러서 다시 움직이기</span> : <><span className="hms-motion-desktop">마우스를 올리면 잠시 멈춥니다</span><span className="hms-motion-touch">눌러서 움직임 멈추기</span></>}
        </figcaption>
      </figure>
      <div className="hms-caption">
        <h2 id="hms-title"><span>HMS,</span> 개발의 기준으로</h2>
        <p className="hms-definition">사업원칙과 조직원칙을<br />함께 실천하는 태도</p>
        <hr className="hms-rule" />
        <p className="hms-intent">고객의 경험부터 처리 결과까지,<br />더 나은 방식을 찾습니다.</p>
        <a className="hms-source" href="https://hansol.com/home/hansol/hansol01.jsp" target="_blank" rel="noreferrer">
          Hansol Management System <ArrowUpRight size={11} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
