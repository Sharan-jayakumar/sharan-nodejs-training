import { Form, Input, Button, Typography } from "antd";
import { Link } from "react-router";

function SigninForm() {
  return (
    <div className="w-full min-w-md mt-6">
      <Form name="login" initialValues={{ remember: true }}>
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

        <div className="text-right mb-4">
          <Link to="#" className="text-blue-500 hover:text-blue-700">
            Forgot password?
          </Link>
        </div>

        <Form.Item>
          <Button block type="primary" htmlType="submit">
            Log in
          </Button>
        </Form.Item>

        <div className="text-center">
          <Typography.Text>
            Don't have an account?{" "}
            <Link to="/sign-up" className="text-blue-500 hover:text-blue-700">
              Signup
            </Link>
          </Typography.Text>
        </div>
      </Form>
    </div>
  );
}

export default SigninForm;
