import { AsideScrollLeft } from '@/components/asideScrollLeft';
import { AsideScrollRight } from '@/components/asideScrollRight';
import { MainComponent } from '@/components/mainComponent';
import { ScrollArea } from '@/components/ui/scroll-area';
import { FC } from 'react';

interface ComponentPageProps {
  // Define prop types here
}

const ComponentPage: FC<ComponentPageProps> = () => {
  return (
		<>
			<AsideScrollLeft />
			
		<MainComponent />
			<AsideScrollRight />
		</>
	);
};

export default ComponentPage;