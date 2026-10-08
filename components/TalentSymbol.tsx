import { CheckCheck, Lightbulb, Route } from 'lucide-react';

export type TalentValue = 'discipline' | 'creative-thinking' | 'sense-of-purpose';
const symbols = {
  discipline: { icon: CheckCheck, label: '끝까지 확인하는 개발' },
  'creative-thinking': { icon: Lightbulb, label: '더 나은 방식을 찾는 개발' },
  'sense-of-purpose': { icon: Route, label: '고객의 다음 행동을 생각하는 개발' },
};
export function TalentSymbol({ value }: { value: TalentValue }) {
  const { icon: Icon, label } = symbols[value];
  return <span className={`talent-symbol talent-symbol-${value}`} title={label}><Icon aria-hidden="true" strokeWidth={1.6} /></span>;
}
