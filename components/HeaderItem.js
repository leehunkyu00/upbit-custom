import Link from 'next/link';

function HeaderItem({ Icon, title, href }) {
    return (
        <div className="flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white">
            <Link href={href}>
                <a>
                    <Icon className="h-8 mb-1 group-hover:animate-bounce" />
                    <p className="opacity-0 group-hover:opacity-100 tracking-widest">{title}</p>
                </a>
            </Link>
        </div>
    )

}

export default HeaderItem;