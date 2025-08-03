import { useState } from "react";
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"


const MessageForm = () => {

  const [message, setMessage] = useState<string>("");
  const [delay, setDelay] = useState<number>(10);
  const [isSending, setIsSending] = useState<boolean>(false);
  const [timerID, setTimerID] = useState<NodeJS.Timeout | null>(null);
  const [sendMessage, setSendMessage] = useState<string>("");


  const handleSend = () => {
    setIsSending(true)

    const id = setTimeout(() => {
      setSendMessage(message);
      setMessage("");
      setIsSending(false);
    }, delay * 1000)

    setTimerID(id)
  }

  const handleCancel = () => {
    if (timerID) clearTimeout(timerID);
    setIsSending(false);
  }

  return (
    <div className="max-w-md mx-auto mt-20 p-6 rounded-lg border shadow-sm bg-white space-y-4">
      <h2 className="text-2xl font-bold text-gray-800">DM Delay Button</h2>

      <Textarea
        placeholder="Enter your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        disabled={isSending}
      />

      <Input
        type="number"
        placeholder="Delay in seconds"
        value={delay}
        onChange={(e) => setDelay(Number(e.target.value))}
      />

      {!isSending ? (
        <Button className="w-full" onClick={handleSend}>
          Send with delay
        </Button>
      ) : (
        <Button className="w-full" variant="destructive" onClick={handleCancel}>
          Cancel Sending
        </Button>
      )}

      {
        sendMessage && (
          <div className="bg-green-100 border rounded p-3 text-green-900">
            <p className="font-bold">Message Sent:</p>
            <p>{sendMessage}</p>
          </div>
        )
      }
    </div>
  )
}

export default MessageForm