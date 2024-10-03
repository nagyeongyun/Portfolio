import { SectionContentProps } from '../../types/Section';
import { ReactComponent as OpenDetail } from '../../assets/icon/open-detail.svg';

const SectionContent = ({ content, click }: SectionContentProps) => {
  return (
    <div
      onClick={click}
      className={`flex flex-row mt-0.5 items-center ${click ? 'underline-animation cursor-pointer' : ''}`}
    >
      <div className="flex items-center">
        <ul className="list-disc list-inside text-[1rem]">
          <li>{content}</li>
        </ul>
        {click && (
          <OpenDetail className="w-[0.77rem] h-[0.77rem] ml-[0.35rem] mb-[0.05rem]" />
        )}
      </div>
    </div>
  );
};

export default SectionContent;
