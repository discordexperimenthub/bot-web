import { Label } from "../ui/label"
import { Switch } from "../ui/switch"

export default function SwitchWithLabel({
    children,
    disabled,
    checked,
    id
}: {
    children: React.ReactNode,
    id: string
    disabled?: boolean,
    checked?: boolean,
}) {
    return (
        <>
            <div className="flex items-center space-x-2">
                <Switch defaultChecked={checked} disabled={disabled} id={id} />
                <Label className="mx-2 text-center">{children}</Label>
            </div>
        </>
    )
}