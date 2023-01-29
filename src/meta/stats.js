import { IoCloudDownloadOutline } from 'react-icons/io5';
import {RiDeleteBin6Line} from 'react-icons/ri';
import { FiUsers } from 'react-icons/fi';
import {TbUserPlus , TbUserOff} from 'react-icons/tb';
import {HiOutlineDownload} from 'react-icons/hi'
export const stats = [
    {id:1,title:'App Installed',icon:<IoCloudDownloadOutline />,count: '3154'},
    {id:2,title:'Active Installs',icon:<HiOutlineDownload/>,count: '900'},
    {id:3,title:'Churn Rate',icon:<TbUserOff/>,count: '14.85%'},
    {id:4,title:'App Un-Installed',icon:<RiDeleteBin6Line />,count: "2010"},
    {id:5,title:'Alive Apps users',icon:<FiUsers/>,count: "840"},
    {id:6,title:'Alive Churn Rate',icon:<TbUserPlus/>,count: "14.85%"},
]