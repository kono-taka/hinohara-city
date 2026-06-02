import FeedbackWidget from "@/components/FeedbackWidget";

type Props = {
  department: string;
  division?: string;
  tel?: string;
  updated: string;
};

export default function PageInfo({ department, division, tel, updated }: Props) {
  return (
    <>
      <FeedbackWidget />
      <div className="page-info-bar">
        <div className="page-info-contact">
          <span className="page-info-label">このページに関するお問い合わせ先</span>
          <span className="page-info-dept">
            {department}{division ? `　${division}` : ""}
          </span>
          {tel && <span className="page-info-tel">電話：{tel}</span>}
        </div>
        <div className="page-info-updated">最終更新日：{updated}</div>
      </div>
    </>
  );
}
