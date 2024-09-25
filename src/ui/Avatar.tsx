interface AvatarProps {
    className?: string;
    src?: string,
    alt?: string
}

export default function Avatar({ className, src, alt }: AvatarProps): JSX.Element {
    return (
        <img
            src={src || '/public/user.jpeg'}
            alt={alt || ''}
            loading="lazy"
            className={`rounded-full object-cover ${className}`}
        />
    );
}
