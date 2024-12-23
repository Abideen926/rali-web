import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import CallIcon from '@mui/icons-material/Call';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import ArticleIcon from '@mui/icons-material/Article';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import PsychologyIcon from '@mui/icons-material/Psychology';

export const VARIFY_RESUME = {
    title: 'Verify Resume',
    subTitles: 'Candidate 1234 (UCN Number)',
    resume: 'Resume',
    visible: 'Visible Data',
    para: '*Shows resume view that the employer will see (unconscious bias data is not visible)',
    items: [
        {
            icon: <HomeRepairServiceIcon sx={{ color: '#111111' }} />,
            title: 'Work Experience',
            verify: '/assets/images/verify.png'
        },
        {
            icon: <SchoolIcon sx={{ color: '#111111' }} />,
            title: 'Graduate',
            verify: '/assets/images/verify.png'

        },
        {
            icon: <WorkspacePremiumIcon sx={{ color: '#111111' }} />,
            title: 'Certification',
            verify: '/assets/images/verify.png'

        },
        {
            icon: <MilitaryTechIcon sx={{ color: '#111111' }} />,
            title: 'Accomplishments',
            verify: '/assets/images/verify.png'

        },
        {
            icon: <CallIcon sx={{ color: '#111111' }} />,
            title: 'Phone',
            verify: '/assets/images/verify.png'

        },
        {
            icon: <EmojiEventsIcon sx={{ color: '#111111' }} />,
            title: 'Awards',
            verify: '/assets/images/verify.png'

        },
        {
            icon: <OtherHousesIcon sx={{ color: '#111111' }} />,
            title: 'School',
            verify: '/assets/images/verify.png'

        },
        {
            icon: <ArticleIcon sx={{ color: '#111111' }} />,
            title: 'Licenses',
            verify: '/assets/images/verify.png'

        },
        {
            icon: <LocalActivityIcon sx={{ color: '#111111' }} />,
            title: 'Military',
            verify: '/assets/images/verify.png'

        },
        {
            icon: <EqualizerIcon sx={{ color: '#111111' }} />,
            title: 'Subject Matter Expert',
            verify: '/assets/images/verify.png'

        },
        {
            icon: <PsychologyIcon sx={{ color: '#111111' }} />,
            title: 'Advising/Coach/Mentor/Outreach',
            verify: '/assets/images/verify.png'

        },
    ],
};
