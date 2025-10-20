import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getCvTemplatePage } from '../../api/CVtemplate';
import { CvTemplate } from '../../api/CVtemplate/type';
import { formatDate } from '../../assets/formatDate';
// Interface cho CV
interface CVItem {
    id: string;
    name: string;
    fileName: string;
    lastModified: string;
    previewImage: string;
    type: 'pdf' | 'doc';
}

// Dữ liệu fake cho CV
const mockCVData: CVItem[] = [
    {
        id: '1',
        name: 'NguyenThiThuyTrang_Cv.Pdf',
        fileName: 'NguyenThiThuyTrang_Cv.Pdf',
        lastModified: 'Cập nhật 16/10/2025 11:45 AM',
        previewImage: 'https://cdn.123job.vn/123job/static.123job/cv_image_3/123Job.vn-6cc1df7a311668c43.jpeg?tr=w-340,h-280',
        type: 'pdf'
    },
    {
        id: '2',
        name: 'Cv.Pdf',
        fileName: 'Cv.Pdf',
        lastModified: 'Cập nhật 14/10/2025 11:45 AM',
        previewImage: 'https://cdn.123job.vn/123job/static.123job/cv_image_3/123Job.vn-6cc1df7a311668c43.jpeg?tr=w-340,h-280',
        type: 'pdf'
    },
    {
        id: '3',
        name: 'LeVanMinh_CV.Pdf',
        fileName: 'LeVanMinh_CV.Pdf',
        lastModified: 'Cập nhật 12/10/2025 09:30 AM',
        previewImage: 'https://cdn.123job.vn/123job/static.123job/cv_image_3/123Job.vn-6cc1df7a311668c43.jpeg?tr=w-340,h-280',
        type: 'pdf'
    },
    {
        id: '4',
        name: 'PhamThiHoa_Resume.Pdf',
        fileName: 'PhamThiHoa_Resume.Pdf',
        lastModified: 'Cập nhật 10/10/2025 02:15 PM',
        previewImage: 'https://cdn.123job.vn/123job/static.123job/cv_image_3/123Job.vn-6cc1df7a311668c43.jpeg?tr=w-340,h-280',
        type: 'pdf'
    }
];

const QuanlyCV: React.FC = () => {
    const [cvList, setCvList] = useState<CvTemplate[]>([]);
    const [selectedCV, setSelectedCV] = useState<string | null>(null);


    const handleDeleteCV = (id: string) => {
        setCvList(prev => prev.filter(cv => cv._id !== id));
    };

    const handleDownloadCV = (cv: CvTemplate) => {
        // Simulate download
        console.log(`Downloading ${cv.ten} from ${cv.cvFile}`);
    };

    const handleMoreOptions = (id: string) => {
        setSelectedCV(selectedCV === id ? null : id);
    };

    useEffect(() => {
        getCvTemplatePage().then(data => {
            console.log("Fetched CV Templates:", data.data.result);
            setCvList(data.data.result);
        }).catch(err => {
            console.error("Error fetching CV Templates:", err);
        });
    }, []);

    return (
        <Container>
            <MainContent>
                {/* Header */}
                <Header>
                    <HeaderLeft>
                        <Title>Quản Lý CV</Title>

                    </HeaderLeft>
                    <HeaderRight>
                        <CVCount>{cvList.length} mẫu CV đã tạo</CVCount>
                        <AddCVButton>
                            Thêm mới CV
                        </AddCVButton>
                    </HeaderRight>
                </Header>

                {/* CV Grid */}
                <CVGrid>
                    {cvList.map((cv) => (
                        <CVCard key={cv._id}>
                            <CVPreview>
                                <CVImage
                                    src={cv.hinhAnh}
                                    alt={cv.ten}
                                    onError={(e) => {
                                        // Fallback to default CV template image
                                        e.currentTarget.src = '/images/cv-templates/default-cv.jpg';
                                    }}
                                />
                                <CVOverlay>
                                    <CVActions>
                                        <ActionButton
                                            onClick={() => handleDownloadCV(cv)}
                                            title="Tải xuống"
                                        >
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                                <path d="M19 9H15V3H9V9H5L12 16L19 9ZM5 18V20H19V18H5Z" fill="white" />
                                            </svg>
                                        </ActionButton>
                                        <a href={cv.cvFile} target="_blank" rel="noopener noreferrer">
                                            <ActionButton
                                                onClick={() => console.log('Preview CV')}
                                                title="Xem trước"
                                            >
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5S21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12S9.24 7 12 7S17 9.24 17 12S14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12S10.34 15 12 15S15 13.66 15 12S13.66 9 12 9Z" fill="white" />
                                                </svg>
                                            </ActionButton>
                                        </a>
                                    </CVActions>
                                </CVOverlay>
                            </CVPreview>

                            <CVInfo>
                                <CVName>{cv.ten}</CVName>
                                <CVDate>Cập nhật : {formatDate(cv.createdAt)}</CVDate>
                            </CVInfo>
                        </CVCard>
                    ))}
                </CVGrid>
            </MainContent>

            {/* Sidebar */}
            <Sidebar>
                <AdBanners>
                    <AdBanner>
                        <img src="/images/home/thongbaotuyendung.png" alt="Nissan Advertisement" />
                    </AdBanner>
                    <AdBanner>
                        <img src="/images/home/LG.png" alt="LG Advertisement" />
                    </AdBanner>
                </AdBanners>
            </Sidebar>
        </Container>
    );
};

// Styled Components
const Container = styled.div`
    display: flex;
    max-width: 1240px;
    margin: 0 auto;
    padding: 20px;
    gap: 24px;
    min-height: 100vh;
    background-color: #F7F7F7;

    @media (max-width: 992px) {
        flex-direction: column;
        padding: 16px;
    }

    @media (max-width: 768px) {
        padding: 12px;
    }
`;

const MainContent = styled.div`
    flex: 1;
    min-width: 0;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    background-color: #FFF;
    border: 1px solid #EFEFEF;
    border-radius: 8px;
    padding: 24px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
        padding: 16px;
    }
`;

const HeaderLeft = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

const HeaderRight = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;

    @media (max-width: 768px) {
        width: 100%;
        justify-content: flex-end;
    }

`;

const Title = styled.h1`
    font-size: 28px;
    font-weight: 700;
    color: #051A53;
    margin: 0;

    @media (max-width: 768px) {
        font-size: 24px;
    }
`;

const CVCount = styled.span`
    font-size: 14px;
    color: #007AFF;
    font-weight: 500;
`;

const AddCVButton = styled.button`
    background: #BC2826;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s ease;

    &:hover {
        background: #A42321;
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const CVGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 24px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 16px;
    }
`;

const CVCard = styled.div`
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
    }
`;

const CVPreview = styled.div`
    position: relative;
    width: 100%;
    height: 150px;
    overflow: hidden;

    &:hover > div {
        opacity: 1;
    }
`;

const CVImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.2s ease;
    padding: 15px;
    border-radius: 26px;
    &:hover {
        transform: scale(1.05);
    }
`;

const CVOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.2s ease;
`;

const CVActions = styled.div`
    display: flex;
    gap: 12px;
`;

const ActionButton = styled.button`
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 8px;
    padding: 12px;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background: rgba(255, 255, 255, 0.3);
        transform: scale(1.1);
    }
`;

const CVInfo = styled.div`
    padding: 16px;
`;

const CVName = styled.h3`
    font-size: 16px;
    font-weight: 600;
    color: #051A53;
    margin: 0 0 8px;
    line-height: 1.3;
`;

const CVDate = styled.div`
    font-size: 13px;
    color: #666;
    margin-bottom: 12px;
`;

const CVFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const CVType = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    font-weight: 600;
    color: #E74C3C;
`;

const MoreButton = styled.button<{ isActive: boolean }>`
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
    border-radius: 4px;
    position: relative;
    transition: background 0.2s ease;

    &:hover {
        background: #f5f5f5;
    }

    ${props => props.isActive && `
        background: #f5f5f5;
    `}
`;

const DropdownMenu = styled.div`
    position: absolute;
    top: 100%;
    right: 0;
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    min-width: 120px;
    z-index: 10;
    overflow: hidden;
`;

const DropdownItem = styled.button<{ danger?: boolean }>`
    width: 100%;
    padding: 12px 16px;
    border: none;
    background: none;
    text-align: left;
    font-size: 14px;
    cursor: pointer;
    transition: background 0.2s ease;
    color: ${props => props.danger ? '#E74C3C' : '#333'};

    &:hover {
        background: ${props => props.danger ? '#FEF2F2' : '#f5f5f5'};
    }
`;

const AddCVCard = styled.div`
    background: white;
    border: 2px dashed #E5E7EB;
    border-radius: 12px;
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    cursor: pointer;
    transition: all 0.2s ease;
    min-height: 280px;

    &:hover {
        border-color: #007AFF;
        background: #F8FAFF;
        transform: translateY(-2px);
    }
`;

const AddCVIcon = styled.div`
    margin-bottom: 16px;
`;

const AddCVText = styled.h3`
    font-size: 18px;
    font-weight: 600;
    color: #051A53;
    margin: 0 0 8px;
`;

const AddCVSubText = styled.p`
    font-size: 14px;
    color: #666;
    margin: 0;
`;

const Sidebar = styled.div`
    width: 320px;
    flex-shrink: 0;

    @media (max-width: 992px) {
        width: 100%;
    }
`;

const AdBanners = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const AdBanner = styled.div`
    border-radius: 8px;
    overflow: hidden;

    img {
        width: 100%;
        height: auto;
        display: block;
    }
`;

export default QuanlyCV;