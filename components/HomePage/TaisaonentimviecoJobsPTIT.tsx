import React from 'react';
import styled from 'styled-components';

const jobStats = {
  newJobsToday: 12,
  activeJobs: 24,
  activeCompanies: 8,
};

const TaisaonentimviecoJobsPTIT = () => {
  return (
    <Wrapper>
      <Container>
        <MapSection>
          <div className="map-container">
            <img src="/images/home/VN-MAP.png" alt="Bản đồ Việt Nam" className="map-image" />
            <img src="/images/home/danhdau1.png" alt="Đánh dấu 1" className="map-marker1" />
            <img src="/images/home/danhdau2.png" alt="Đánh dấu 2" className="map-marker2" />
            <div className="stat-box new-jobs">
              <div className="number">{jobStats.newJobsToday}</div>
              <div className="text">Số việc làm mới hôm nay</div>
            </div>

            <div className="stat-box active-jobs">
              <div className="number">{jobStats.activeJobs}</div>
              <div className="text">Số việc làm đang tuyển</div>
            </div>

            <div className="stat-box active-companies">
              <div className="number">{jobStats.activeCompanies}</div>
              <div className="text">Số công ty đang tuyển</div>
            </div>
          </div>
        </MapSection>

        <InfoSection>
          <Title>
            Tại Sao Nên Tìm Việc Trên Cổng Thông Tin Việc Làm Sinh Viên <RedText>PTIT</RedText>
          </Title>

          <Section>
            <SectionTitle>Với sinh viên</SectionTitle>
            <SectionContent>
              Thông tin việc làm được cập nhật liên tục và chính xác từ các đối tác của Học viện Công nghệ Bưu chính Viễn thông, qua đó sinh viên có nhiều lựa chọn phù hợp.
            </SectionContent>
          </Section>

          <Section>
            <SectionTitle>Với nhà tuyển dụng</SectionTitle>
            <SectionContent>
              Dễ tìm kiếm các sinh viên, ứng viên phù hợp cho các vị trí thực tập hay nhân viên dưới sự hỗ trợ của Trí tuệ nhân tạo được tích hợp vào cổng thông tin việc làm như phân tích kết quả học tập hay trắc nghiệm ngành nghề...
            </SectionContent>
          </Section>
        </InfoSection>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
  display: flex;
  gap: 40px;
  
  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
  }
`;

const MapSection = styled.div`
  flex: 1;
  min-width: 300px;
  
  .map-container {
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
   .map-marker1{
    position: absolute;
    top: 6%;
    left: 6%;
    width: 482px;
    height: 482px;
    }

  .map-marker2{
    position: absolute;
    top: 3%;
    left: 28%;
    width: 408px;
    height: 408px;
    }

  .map-image {
    width: 582px;
    max-width: 500px;
    height: 582px;
    z-index: 1;
  }
  
  .stat-box {
    position: absolute;
    border-radius: 10px;
    padding: 15px;
    min-width: 195px;
    height: 82px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    
    .number {
      font-size: 24px;
      font-weight: 700;
    }
    
    .text {
      font-size: 14px;
      color: #051A53;
    }
  }
  
  .new-jobs {
    top: 8%;
    right: 0%;
    background-color: #FFEDD0;
    color: #E88800;
  }
  
  .active-jobs {
    bottom: 3%;
    right: 8%;
    background-color: #EBEFFA;
    color: #694FD6;
  }
  
  .active-companies {
    left: 0%;
    top: 43%;
    background-color: #E4F3E4;
    color: #3D7A3E;
  }

  
  @media (max-width: 768px) {
    .stat-box {
      position: relative;
      margin: 10px;
      top: auto;
      left: auto;
      right: auto;
      bottom: auto;
    }
    
    .map-container {
      flex-direction: column;
    }
    
    .map-image {
      object-fit:cover;
    }
  }
`;

const InfoSection = styled.div`
  flex: 1;
  min-width: 300px;
  margin-top: 74px;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: #051A53;
  margin-bottom: 24px;
  line-height: 1.3;
  
  @media (max-width: 768px) {
    font-size: 24px;
    text-align: center;
  }
`;

const RedText = styled.span`
  color: #BC2826;
`;

const Section = styled.div`
  margin-bottom: 24px;
  background-color: #FFF;
  padding: 16px;
  border-radius: 10px;
`;

const SectionTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #051A53;
  margin-bottom: 12px;
`;

const SectionContent = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #333;
`;

export default TaisaonentimviecoJobsPTIT;