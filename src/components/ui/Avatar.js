import clsx from 'clsx';

export default function Avatar({name, url, size}) {
    return (
        <img className={clsx("rounded-full border-2 border-dark/70 dark:border-light/70", size)} src={url} alt={name} title={name}/>
    )
}