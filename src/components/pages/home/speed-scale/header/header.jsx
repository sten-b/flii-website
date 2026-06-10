import Button from 'components/shared/button';
import SectionLabel from 'components/shared/section-label';
import LINKS from 'constants/links';
import { cn } from 'utils/cn';

const Header = () => (
  <div className="pt-60 xl:pt-40 lg:pt-[116px] md:pt-[102px]">
    <div className="max-w-208 xl:max-w-[704px] lg:max-w-[480px]">
      <SectionLabel className="mb-5 lg:mb-[18px] md:mb-4" theme="white">
        LOREM IPSUM DOLOR
      </SectionLabel>
      <h2 className="text-[80px] leading-none tracking-tighter xl:text-[72px] lg:text-[52px] md:text-[36px]">
        Magna aliqua enim ad minim veniam quis nostrud.
      </h2>
      <p
        className={cn(
          'mt-6 max-w-[736px] text-lg leading-normal tracking-extra-tight text-gray-new-60',
          'lg:mt-5 lg:text-base lg:leading-snug md:mt-[18px] sm:text-[15px]'
        )}
      >
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
      </p>
      <Button
        className="mt-9 lg:mt-8 md:mt-7"
        theme="white-filled"
        size="new"
        to={LINKS.programsAgents}
      >
        I’m building an agent
      </Button>
    </div>
  </div>
);

export default Header;
