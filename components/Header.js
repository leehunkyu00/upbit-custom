import {
    HomeIcon,
    QuestionMarkCircleIcon,
    SearchIcon,
    UserIcon,
    HeartIcon,
    CubeIcon,
    MailIcon,
    BeakerIcon
} from '@heroicons/react/solid';
import HeaderItem from './HeaderItem';

function Header() {

    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center">
            <div className="flex cursor-pointer transform hover:scale-105">
                <BeakerIcon className="h-10" />
                <p className="text-3xl font-extrabold" >UPBIT Custom</p>
            </div>
            <div className="flex flex-grow justify-evenly max-w-sm">
                <HeaderItem title='HOME' Icon={HomeIcon} href='/'/>
                <HeaderItem title='QUESTION' Icon={QuestionMarkCircleIcon} href='/help'/>
                <HeaderItem title='HEART' Icon={HeartIcon} href='/'/>
                <HeaderItem title='ACCOUNT' Icon={UserIcon} href='/'/>
            </div>
        </header>
    )
}

export default Header;