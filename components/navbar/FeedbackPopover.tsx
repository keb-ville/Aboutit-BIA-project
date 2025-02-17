// "use client";

// import { useState } from "react";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import { Button } from "../ui/button";
// import { Textarea } from "../ui/textarea";
// import { Input } from "../ui/input";
// import { Label } from "../ui/label";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "../../components/ui/select";

// export default function FeedbackPopover() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [feedback, setFeedback] = useState("");
//   const [feedbackTopic, setFeedbackTopic] = useState("");
//   const [submitted, setSubmitted] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     const formUrl =
//       "https://docs.google.com/forms/d/e/1FAIpQLSdYexXngs7gnfsU9DCSbIGG6sS3cV1P8PeRnkYjQVPipRngDw/formResponse";

//     // Create URLSearchParams
//     const params = new URLSearchParams({
//       "entry.82099855": feedbackTopic,
//       "entry.1664844377": feedback,
//       "entry.321269941": name,
//       "entry.305150992": email,
//     });

//     // Construct the full URL with parameters
//     const submissionUrl = `${formUrl}?${params.toString()}`;

//     try {
//       console.log("Submitting to URL:", submissionUrl);

//       // Using fetch with GET method instead of POST
//       await fetch(submissionUrl, {
//         method: "GET",
//         mode: "no-cors",
//       });

//       // Show success message and clear form
//       setSubmitted(true);
//       setTimeout(() => setSubmitted(false), 5000);
//       setFeedback("");
//       setName("");
//       setEmail("");
//       setFeedbackTopic("");
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       alert("There was an error submitting your feedback. Please try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <Popover>
//       <PopoverTrigger asChild>
//         <Button
//           variant="outline"
//           size="lg"
//           className="capitalize bg-yellow-100 text-black hover:bg-yellow-100 hover:text-black focus:outline-none"
//         >
//           Give Feedback
//         </Button>
//       </PopoverTrigger>
//       <PopoverContent className="w-80 p-4 shadow-lg rounded-lg bg-yellow-100">
//         {submitted ? (
//           <div className="text-center text-black">
//             <p className="font-semibold">Thank you!</p>
//             <p>Your feedback has been submitted.</p>
//             <p className="mt-2">We love hearing from you!</p>
//             <p className="mt-2">Please give us more feedback:</p>
//             <Button
//               type="submit"
//               onClick={() => setSubmitted(false)}
//               className="mt-3 text-white"
//             >
//               Tell us more
//             </Button>
//           </div>
//         ) : (
//           <form onSubmit={handleSubmit} className="space-y-3">
//             <div>
//               <Label htmlFor="feedback-topic">This feedback is about:</Label>
//               <Select onValueChange={setFeedbackTopic}>
//                 <SelectTrigger className="bg-white border">
//                   <SelectValue placeholder="Select an option" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="home">the Home page</SelectItem>
//                   <SelectItem value="bia">the Speak to Bia page</SelectItem>
//                   <SelectItem value="calls-for-change">
//                     Calls for Change
//                   </SelectItem>
//                   <SelectItem value="topics">Topics</SelectItem>
//                   <SelectItem value="supporting-beliefs">
//                     Supporting Beliefs
//                   </SelectItem>
//                   <SelectItem value="something-else">Something else</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>
//             <div>
//               <Label htmlFor="feedback">Give us your feedback</Label>
//               <Textarea
//                 id="feedback"
//                 value={feedback}
//                 onChange={(e) => setFeedback(e.target.value)}
//                 placeholder="Type your feedback here..."
//                 required
//                 className="bg-white border"
//               />
//             </div>
//             <div>
//               <Label htmlFor="name">Name (Optional)</Label>
//               <Input
//                 id="name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder="Enter your name"
//                 className="bg-white border"
//               />
//             </div>
//             <div>
//               <Label htmlFor="email">Email (Optional)</Label>
//               <Input
//                 id="email"
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Enter your email"
//                 className="bg-white border"
//               />
//             </div>
//             <Button
//               type="submit"
//               className="w-full text-white"
//               disabled={isSubmitting}
//             >
//               {isSubmitting ? "Submitting..." : "Submit"}
//             </Button>
//           </form>
//         )}
//       </PopoverContent>
//     </Popover>
//   );
// }
"use client";

import type React from "react";

import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function FeedbackPopover() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [feedbackTopic, setFeedbackTopic] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await addDoc(collection(db, "feedback"), {
        feedbackTopic,
        feedback,
        name,
        email,
        timestamp: new Date(),
      });

      // Show success message and clear form
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
      setFeedback("");
      setName("");
      setEmail("");
      setFeedbackTopic("");
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert("There was an error submitting your feedback. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="lg"
          className="capitalize bg-yellow-100 text-black hover:bg-yellow-100 hover:text-black focus:outline-none"
        >
          Give Feedback
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-4 shadow-lg rounded-lg bg-yellow-100">
        {submitted ? (
          <div className="text-center text-black">
            <p className="font-semibold">Thank you!</p>
            <p>Your feedback has been submitted.</p>
            <p className="mt-2">We love hearing from you!</p>
            <p className="mt-2">Please give us more feedback:</p>
            <Button
              type="submit"
              onClick={() => setSubmitted(false)}
              className="mt-3 text-white"
            >
              Tell us more
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <Label htmlFor="feedback-topic">This feedback is about:</Label>
              <Select onValueChange={setFeedbackTopic}>
                <SelectTrigger className="bg-white border">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="home">the Home page</SelectItem>
                  <SelectItem value="bia">the Speak to Bia page</SelectItem>
                  <SelectItem value="calls-for-change">
                    Calls for Change
                  </SelectItem>
                  <SelectItem value="topics">Topics</SelectItem>
                  <SelectItem value="supporting-beliefs">
                    Supporting Beliefs
                  </SelectItem>
                  <SelectItem value="something-else">Something else</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="feedback">Give us your feedback</Label>
              <Textarea
                id="feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Type your feedback here..."
                required
                className="bg-white border"
              />
            </div>
            <div>
              <Label htmlFor="name">Name (Optional)</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="bg-white border"
              />
            </div>
            <div>
              <Label htmlFor="email">Email (Optional)</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="bg-white border"
              />
            </div>
            <Button
              type="submit"
              className="w-full text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </form>
        )}
      </PopoverContent>
    </Popover>
  );
}
