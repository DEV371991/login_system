// src/pages/Contact.js
import React, { useState } from "react";
import { Form, Input, Button, message, Card } from "antd";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      message.success(`Message sent! We'll get back to you soon.`);
      console.log("Form values:", values);
    }, 1500);
  };

  return (
    <Card title="Contact Us" style={{ maxWidth: 600, margin: "0 auto" }}>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          name="name"
          label="Your Name"
          rules={[{ required: true, message: "Please enter your name" }]}
        >
          <Input placeholder="John Doe" />
        </Form.Item>

        <Form.Item
          name="email"
          label="Your Email"
          rules={[
            { required: true, message: "Please enter your email" },
            { type: "email", message: "Please enter a valid email" },
          ]}
        >
          <Input placeholder="example@email.com" />
        </Form.Item>

        <Form.Item
          name="message"
          label="Your Message"
          rules={[{ required: true, message: "Please enter your message" }]}
        >
          <Input.TextArea rows={4} placeholder="Type your message here..." />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Send Message
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}
