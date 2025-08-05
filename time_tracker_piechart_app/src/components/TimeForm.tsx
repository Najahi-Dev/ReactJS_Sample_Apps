import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import {
    AlertDialog,
    AlertDialogAction,
    // AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    // AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

interface Props{
    onAdd: (activity: string, hours: number) => void
}

const TimeForm = ({ onAdd }: Props) => {
    const [activity, setActivity] = useState("")
    const [hours, setHours] = useState("")
    const [showAlert, setShowAlert] = useState(false)

    const handleSubmit = () => {
        if (!activity.trim() || !hours) {
            setShowAlert(true)
            return
        }
        onAdd(activity, Number(hours));
        setActivity("");
        setHours("");
    }

    return (
        <div className="space-y-3">
            <Input
                placeholder="Activity (e.g. Coding)"
                value={activity}
                onChange={(e) => setActivity(e.target.value)}
            />

            <Input
                type="number"
                placeholder="Hours (e.g. 8)"
                value={hours}
                onChange={(e) => setHours(e.target.value)}
            />

            <Button className="w-full cursor-pointer" onClick={handleSubmit}>Add Activity</Button>

            <AlertDialog open={showAlert} onOpenChange={setShowAlert}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Missing Information</AlertDialogTitle>
                        <AlertDialogDescription>
                            Please fill in both the activity name and hours before submitting.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogAction className="cursor-pointer" onClick={() => setShowAlert(false)}>
                            Okay
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}

export default TimeForm