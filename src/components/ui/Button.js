import clsx from 'clsx';

export default function Button({name, size = "md", onClick = undefined}) {
    return (
        <button onClick={onClick} className={clsx(size === "sm" && "py-1.5 px-3 text-[15px]", size === "md" && "py-2 px-3.5", size === "lg" && "py-2.5 px-5", "border border-black dark:border-white hover:bg-gray-50 dark:hover:bg-gray-50/10 rounded-2xl font-itcavantgardestdmd")}>
            {name}
        </button>
    )
}