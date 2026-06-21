export const mockResults = {
  intent: {
    primaryIntent: "GitSync multi-instance deployment",
    topics: ["GitSync", "Branching", "Pull Requests", "Deployment"],
    queries: [
      "git sync",
      "git sync multi instance",
      "branching and pull requests",
      "deployment workflow",
    ],
  },
  documentation: [
    {
      id: 1,
      title: "GitSync Overview",
      summary:
        "Supports multi-instance application migration, branch tracking, and automated backup management configurations.",
      source: "Documentation",
      link: "#",
    },
    {
      id: 2,
      title: "Advanced Multi-Instance Topology",
      summary:
        "Production architecture guidelines for deploying core synchronization engines across isolated cloud environments.",
      source: "Architecture Guide",
      link: "#",
    },
  ],
  tickets: [
    {
      id: "TK-8492",
      title: "GitSync deployment cluster sync issue",
      similarity: "94%",
      customer: "Acme Corp",
      date: "2 days ago",
      preview:
        "Customer attempted to deploy dual GitSync operators inside a singular Kubernetes namespace. Experienced state-lock conflict...",
    },
    {
      id: "TK-7104",
      title: "Multi-instance webhook authentication failure",
      similarity: "88%",
      customer: "Stark Industries",
      date: "1 week ago",
      preview:
        "Secondary instance failed to validate GitHub handshake payload due to missing secret mirroring across cluster namespaces.",
    },
  ],
  suggestedResponse: `Hi there,

Thank you for reaching out. Based on your deployment configuration, setting up a GitSync multi-instance topology requires cross-namespace secret synchronization and dedicated state operators. 

Here are the recommended steps based on our documentation:
1. Ensure individual instances do not share state-locks in a single namespace.
2. Verify that your webhook payloads are mirrored matching the secondary instance secrets.

Let me know if you would like me to walk through the YAML architecture specs with you!`,
};
