import { Form, Input, Button, Typography } from "antd";
import { Link } from "react-router";

function SignupForm() {
  return (
    <div className="w-full min-w-md mt-6">
      <Form name="signup" initialValues={{ remember: true }}>
        <Form.Item
          name="email"
          rules={[
            { required: true, message: "Please input your Email!" },
            { type: "email", message: "Please enter a valid email!" },
          ]}
        >
          <Input placeholder="Enter you Email" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            { required: true, message: "Please input your Password!" },
            { min: 6, message: "Password must be at least 6 characters." },
          ]}
        >
          <Input type="password" placeholder="Password" />
        </Form.Item>

        <Form.Item
          name="confirm"
          dependencies={["password"]}
          hasFeedback
          rules={[
            { required: true, message: "Please confirm your password!" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input type="password" placeholder="Confirm Password" />
        </Form.Item>

        <Form.Item>
          <Button block type="primary" htmlType="submit">
            Signup
          </Button>
        </Form.Item>

        <div className="text-center">
          <Typography.Text>
            Already have an account?{" "}
            <Link to="/sign-in" className="text-blue-500 hover:text-blue-700">
              Signin
            </Link>
          </Typography.Text>
        </div>
      </Form>
    </div>
  );
}

export default SignupForm;
