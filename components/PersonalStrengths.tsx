const principles = [
  { name: '몰입', title: '화면부터 서버까지', description: '고객이 보는 화면과 서버에 남는 처리 결과를 함께 확인합니다.' },
  { name: '투명', title: '판단 근거를 남기는 개발', description: '처리 과정과 결과를 기록해, 오류의 원인을 다시 확인할 수 있게 합니다.' },
  { name: '존중', title: '다음 사람을 생각하는 코드', description: '반복되는 문제는 다음 사람이 이해할 수 있는 구조로 풀어냅니다.' },
  { name: '스피드', title: '반복과 대기를 줄이는 개발', description: '독립적인 작업은 병렬로 처리하고, 응답 시간이 줄었는지 측정합니다.' },
];

export function PersonalStrengths() {
  return <section className="hansol-principles" aria-label="한솔의 일하는 방식과 나의 개발 기준">
    <figure className="principles-wheel">
      <svg viewBox="0 0 400 400" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="principles-ring" x1="0" y1="1" x2="1" y2="0"><stop stopColor="#007fc3" /><stop offset="1" stopColor="#6dc5ef" /></linearGradient>
          <path id="principles-top" d="M 69, 116 A 156,156 0 0,1 331,116" />
          <path id="principles-right" d="M 337,124 A 156,156 0 0,1 337,276" />
          <path id="principles-bottom" d="M 79,302 A 156,156 0 0,0 321,302" />
          <path id="principles-left" d="M 63,276 A 156,156 0 0,1 63,124" />
        </defs>
        <circle cx="200" cy="200" r="155" fill="#07131b" stroke="url(#principles-ring)" strokeWidth="38" />
        <g className="wheel-outer-label"><text><textPath href="#principles-top" startOffset="50%" textAnchor="middle">차별적 경쟁우위</textPath></text><text><textPath href="#principles-right" startOffset="50%" textAnchor="middle">고객지향</textPath></text><text><textPath href="#principles-bottom" startOffset="50%" textAnchor="middle">새로운 가치</textPath></text><text><textPath href="#principles-left" startOffset="50%" textAnchor="middle">더 나은 방식</textPath></text></g>
        <g stroke="#007fc3" strokeWidth="1.6" opacity=".8"><path d="M200 67v266M67 200h266" /></g>
        <circle cx="200" cy="200" r="26" fill="#07131b" stroke="#00a650" strokeWidth="1.5" />
        <text className="wheel-center" x="200" y="205" textAnchor="middle">HMS</text>
        <g className="wheel-inner-label" textAnchor="middle"><text x="136" y="143">몰입</text><text x="264" y="143">투명</text><text x="136" y="268">존중</text><text x="264" y="268">스피드</text></g>
      </svg>
      <figcaption><span>HANSOL MANAGEMENT SYSTEM</span><a href="https://hansol.com/home/recruit/recruit01.jsp" target="_blank" rel="noreferrer">한솔의 일하는 방식</a></figcaption>
    </figure>
    <dl className="principles-experience">{principles.map((principle) => <div key={principle.name}>
      <dt><span>{principle.name}</span><strong>{principle.title}</strong></dt>
      <dd>{principle.description}</dd>
    </div>)}</dl>
  </section>;
}
