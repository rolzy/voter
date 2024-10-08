import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NewPollForm from "@/app/polls/forms/NewPollForm";

describe("<PollForm />", () => {
  describe("clicking the send button", () => {
    let sendHandler: jest.Mock<void, [String]>;

    async function sendMessage(): Promise<void> {
      sendHandler = jest.fn().mockName("sendHandler");

      render(<NewPollForm onSend={sendHandler} />);

      await userEvent.type(screen.getByTestId("pollText"), "New message");
      await userEvent.click(screen.getByTestId("sendButton"));
    }

    it("clears the text field", async () => {
      await sendMessage();
      expect(
        (screen.getByTestId("pollText") as HTMLInputElement).value,
      ).toEqual("");
    });

    it("calls the send handler", async () => {
      await sendMessage();
      expect(sendHandler).toHaveBeenCalledWith("New message");
    });
  });
});
