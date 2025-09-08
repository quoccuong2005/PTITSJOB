import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import BreadcrumbPage from '../../components/Breadcrumb';
import Modules from '../../components/DetailPage/Module';
import ProgramMainContent, { mockPrograms } from '../../components/DetailPage/MainContent';
import RelatedPrograms from '../../components/DetailPage/RelatedPrograms';

const ProgramDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const program = mockPrograms[id as string];

  if (!program) {
    return <div>Chương trình không tồn tại.</div>;
  }

  return (
    <Wrapper>
      <BreadcrumbSection>
        <div className="breadcrumb-container container mx-auto py-[12px]">
          <BreadcrumbPage
            data={[
              { title: 'Trang chủ', path: '/' },
              { title: 'Mục tiêu nghề nghiệp', path: '/#career-goals' },
              { title: program.title, path: `/programs/${id}` }
            ]}
          />
        </div>
      </BreadcrumbSection>

      <ProgramMainContent program={program} />

      <Modules 
        onModuleClick={(moduleId) => {
          console.log('Module clicked:', moduleId);
        }}
        onCourseClick={(courseId) => {
          console.log('Course clicked:', courseId);
        }}
      />

      <RelatedPrograms 
        onProgramClick={(programId) => {
          console.log('Program clicked:', programId);
          router.push('#');
        }}
        onViewAllClick={() => {
          console.log('View all clicked');
          router.push('#');
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