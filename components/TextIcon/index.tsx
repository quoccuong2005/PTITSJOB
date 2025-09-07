interface Props {
    children?: JSX.Element | string;
    icon?: JSX.Element;
}

const TextIcon = (props: Props) => {
    const { children, icon } = props;
    return <div className="flex items-center gap-[10px] h-[29px]">
        <div>{icon}</div>
        <div>{children}</div>
    </div>
}

export default TextIcon;