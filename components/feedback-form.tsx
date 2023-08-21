import { CreateFeedback } from "@/lib/validator";
import { Heading } from "./heading";
import { SubmitHandler, useForm } from "react-hook-form";
import { Textarea } from "./textarea";
import { Input } from "./input";
import { Button, ButtonLoader } from "./button";
import { useContext, useState } from "react";
import { UserDetailsContext } from "@/context/UserDetailsContext";

export const FeedBackForm = () => {
  const [loading, setLoading] = useState(false);
  // CONSUME_CONTEXT
  const { state, dispatch } = useContext(UserDetailsContext);
  // REACT_HOOK_FORM
  const form = useForm<CreateFeedback>();

  const onSubmit: SubmitHandler<CreateFeedback> = async (
    data: CreateFeedback
  ) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      dispatch({
        type: "details/save",
        payload: {
          userName: data.userName,
          userEmail: data.userEmail,
          userFeedbackMessage: data.userFeedbackMessage,
        },
      });
    }, 4000);
  };

  console.log(state);

  return (
    <div>
      <Heading>Submit Your Feedback</Heading>
      <div className="mt-10 border border-border rounded-md p-8">
        <form
          onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
          className="space-y-8"
        >
          <div>
            <label
              htmlFor="userName"
              className="text-foreground text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Enter Your Name
            </label>
            <Input
              type="text"
              placeholder="e.g. Revel"
              className="mt-2"
              id="userName"
              {...form.register("userName", { required: true })}
            />
            {form.formState.errors.userName &&
            form.formState.errors.userName?.type === "required" ? (
              <p className="mt-2 text-xs text-destructive">
                *user name is required
              </p>
            ) : null}
          </div>
          <div>
            <label
              htmlFor="userEmail"
              className="text-foreground text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Enter Your Email
            </label>
            <Input
              type="email"
              placeholder="something@company.com"
              className="mt-2"
              id="userEmail"
              {...form.register("userEmail", {
                required: "Email is Required",
                validate: {
                  maxLength: (v) =>
                    v.length <= 50 ||
                    "The email should have at most 50 characters",
                  matchPattern: (v) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                    "Email address must be a valid address",
                },
              })}
            />
            {form.formState.errors.userEmail &&
            form.formState.errors.userEmail?.message ? (
              <p className="mt-2 text-xs text-destructive">
                {form.formState.errors.userEmail?.message}
              </p>
            ) : null}
          </div>
          <div>
            <label
              htmlFor="userFeedbackMessage"
              className="text-foreground text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Message
            </label>
            <Textarea
              placeholder="Write something nice ✨"
              className="mt-2"
              id="userEmail"
              {...form.register("userFeedbackMessage", {
                required: true,
              })}
            />
            {form.formState.errors.userFeedbackMessage &&
            form.formState.errors.userFeedbackMessage?.type === "required" ? (
              <p className="mt-2 text-xs text-destructive">
                *Feedback Message is required
              </p>
            ) : null}
          </div>
          {loading ? <ButtonLoader /> : <Button />}
        </form>
      </div>
    </div>
  );
};
