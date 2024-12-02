export type NotificationType = {
  id: number;
  title: string;
  message: string;
  timestamp: string;
  type: string;
};

export const notifications = [
  {
    id: 1,
    title: "Order Shipped",
    message: "Your order #12345 has been shipped and is on its way!",
    timestamp: "2023-09-14T10:45:00Z",
    type: "order",
    seen: false,
  },
  {
    id: 2,
    title: "New Message",
    message: "You have a new message from John Doe.",
    timestamp: "2023-09-13T15:30:00Z",
    type: "message",
    seen: false,
  },
  {
    id: 3,
    title: "Promotion Alert",
    message: "50% off on selected items! Limited time offer.",
    timestamp: "2023-09-12T09:15:00Z",
    type: "promotion",
    seen: false,
  },
  {
    id: 4,
    title: "Payment Received",
    message: "Your payment of $59.99 has been successfully processed.",
    timestamp: "2023-09-11T18:22:00Z",
    type: "payment",
    seen: true,
  },
  {
    id: 5,
    title: "New Follower",
    message: "Jane Smith started following you.",
    timestamp: "2023-09-10T12:05:00Z",
    type: "social",
    seen: true,
  },
  {
    id: 6,
    title: "System Update",
    message: "A new system update is available. Please restart your device.",
    timestamp: "2023-09-09T20:10:00Z",
    type: "system",
    seen: true,
  },
  {
    id: 7,
    title: "Cart Reminder",
    message: "You left 3 items in your cart. Complete your purchase now!",
    timestamp: "2023-09-08T16:50:00Z",
    type: "reminder",
    seen: true,
  },
  {
    id: 8,
    title: "Review Request",
    message: "Please review your recent purchase of Wireless Headphones.",
    timestamp: "2023-09-07T14:30:00Z",
    type: "review",
    seen: true,
  },
  {
    id: 9,
    title: "Password Changed",
    message: "Your password was successfully changed.",
    timestamp: "2023-09-06T08:40:00Z",
    type: "security",
    seen: true,
  },
  {
    id: 10,
    title: "Friend Request",
    message: "Alex Johnson sent you a friend request.",
    timestamp: "2023-09-05T19:25:00Z",
    type: "social",
    seen: true,
  },
  {
    id: 11,
    title: "Order Confirmed",
    message: "Your order #12345 has been confirmed!",
    timestamp: "2023-09-14T10:45:00Z",
    type: "order",
    seen: false,
  },
];
