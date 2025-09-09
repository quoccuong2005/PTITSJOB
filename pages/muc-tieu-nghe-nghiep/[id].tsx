import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import BreadcrumbPage from '../../components/Breadcrumb';
import Modules from '../../components/DetailPage/Module';
import ProgramMainContent from '../../components/DetailPage/MainContent';
import RelatedPrograms from '../../components/DetailPage/RelatedPrograms';
import { getDefaultPrograms, createProgramDetail, createProgramModules } from '../../data/muc-tieu-test';
import useCommonTranslation from '../../hooks/useCommonTranslation';

const ProgramDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [common] = useCommonTranslation();
  
  const programs = getDefaultPrograms(common);
  const programCard = programs.find(p => p.id === id);
  
  if (!programCard) {
    return <div>{common('programNotFound')} {id}</div>;
  }

  const program = createProgramDetail(programCard, common);
  const programModules = createProgramModules(programCard, common);

  return (
    <Wrapper>
      <BreadcrumbSection>
        <div className="breadcrumb-container container mx-auto py-[12px]">
          <BreadcrumbPage
            data={[
              { title: common('breadcrumb.home'), path: '/' },
              { title: common('breadcrumb.allPrograms'), path: '/muc-tieu-nghe-nghiep' },
              { title: program.title, path: `/muc-tieu-nghe-nghiep/${id}` }
            ]}
          />
        </div>
      </BreadcrumbSection>

      <ProgramMainContent program={program} />

      <Modules 
        title={`${program.title} - ${common('modules.title')}`}
        description={common('modules.description')}
        modules={programModules}
        onModuleClick={(moduleId) => {
          console.log('Module clicked:', moduleId);
        }}
        onCourseClick={(courseId) => {
          console.log('Course clicked:', courseId);
        }}
      />

      <RelatedPrograms 
        currentProgramId={id as string}
        onProgramClick={(programId) => {
          console.log('Program clicked:', programId);
          router.push(`/muc-tieu-nghe-nghiep/${programId}`);
        }}
        onViewAllClick={() => {
          console.log('View all clicked');
          router.push('/muc-tieu-nghe-nghiep');
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #fff;
`;

const BreadcrumbSection = styled.div`
  background: #fff;
`;

export default ProgramDetailPage;