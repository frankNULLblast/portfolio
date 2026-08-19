export const profile = {
  name: "方可",
  role: "大模型应用 / AI Agent 工程师",
  handle: "frankNULLblast",
  email: "puffed516@163.com",
  github: "https://github.com/frankNULLblast/llm-agent-internship",
  location: "远程友好 · 中国",
}

export const intro = {
  lead: "把大模型从「在网页里聊两句」，变成「能稳定干活、能服务化、能部署上线」的工程系统。",
  paras: [
    "实习围绕一个核心问题展开：怎么把一个大模型，从聊天玩具，变成能稳定干活的工程系统。主线走完了一条完整的 AI 应用工程师成长路径——从第一次用 Python 调大模型 API，到写专利票据抽取与复核系统，再到定义 Agent 工具、接 MCP 协议、做知识库问答 Agent。",
    "三条支线互相印证：支线一是用 FastAPI 把业务逻辑包成 HTTP 服务；支线二从裸金属开始搭 Linux 基础设施；支线三是把前两条线拧成一个能排队、能持久化、能人工复核、能故障恢复的 Agent 服务。底层环境不稳，上层 Agent 就跑不起来；不懂服务化，模型能力就出不了门。",
  ],
  whatIGrew: [
    "大模型应用开发：自己做结构化输出、异常兜底，定义工具 Schema 让模型调用，接 MCP 统一发现外部工具。",
    "工程化素养：先写可验收需求（SPEC），再写代码，用测试当证据；会做单元测试、代码审查、Git 最小修复。",
    "后端服务：用 FastAPI + Pydantic 把业务包成服务，理解 200/400/422/500 各自代表谁的责任。",
    "基础设施：在 Linux 上从装系统一路做到容器化两副本部署，会配 SELinux、rootless 容器、K3s、消息队列与数据库。",
  ],
}

export type Project = {
  index: string
  title: string
  summary: string
  tags: string[]
  status?: string
  link: { label: string; href: string }
}

export const projects: Project[] = [
  {
    index: "01",
    title: "专利票据智能抽取与复核系统",
    summary:
      "模型负责抽取、程序负责校验、人工负责复核，职责边界清晰。用 FastAPI 把整条链路服务化，是最像真实业务项目的一块。",
    tags: ["大模型应用", "结构化输出", "FastAPI", "异常兜底"],
    status: "已服务化",
    link: { label: "实习仓库", href: "https://github.com/frankNULLblast/llm-agent-internship" },
  },
  {
    index: "02",
    title: "异步 Agent 服务（LangGraph + 中间件）",
    summary:
      "把无状态票据业务 API 改造成 LangGraph + PostgreSQL + Redis + RabbitMQ + Celery 的异步 Agent 服务：能排队、能持久化、跑到人工复核那步停下，人给定了决定再从 checkpoint 恢复。",
    tags: ["LangGraph", "Celery", "PostgreSQL", "Redis", "RabbitMQ"],
    status: "day1–3 已实跑",
    link: { label: "分支 agent-middleware-plus", href: "https://github.com/frankNULLblast/llm-agent-internship" },
  },
  {
    index: "03",
    title: "知识库问答 Agent（10/10 验收）",
    summary:
      "第四周需求定义、检索基线与问答闭环。用 eval.py 在 10 条验收问题上跑出 10/10 passed（来源命中 / 关键词命中 / 拒答正确均 100%，总 Token 3675）。",
    tags: ["RAG", "检索基线", "Eval", "拒答控制"],
    status: "10/10 passed",
    link: { label: "验收报告", href: "https://github.com/frankNULLblast/llm-agent-internship" },
  },
  {
    index: "04",
    title: "从裸金属到 K8s 的基础设施",
    summary:
      "完整走一遍 VMware 装系统 → rootless Podman → K3s → 中间件。能讲清楚「为什么不能一上来就上 K8s」，并部署容器化两副本服务 + MySQL + RabbitMQ。",
    tags: ["Linux", "Podman", "K3s", "SELinux", "中间件"],
    status: "五天完成",
    link: { label: "Linux 仓库", href: "https://github.com/frankNULLblast/llm-agent-internship" },
  },
  {
    index: "05",
    title: "从零自建 Agent（信任边界）",
    summary:
      "Function Calling、自定义工具、MCP、Skills——知道这些分别解决什么问题、不在哪一层。把「信任边界」做成架构第一性原则：确定性计算、只读证据门、审批幂等。",
    tags: ["Function Calling", "MCP", "Skills", "Agent 安全"],
    status: "A/B 实验对比",
    link: { label: "实践记录", href: "https://github.com/frankNULLblast/llm-agent-internship" },
  },
  {
    index: "06",
    title: "企业级 AI 工作流（n8n / OpenCode）",
    summary:
      "把模型能力与工程化流程编排成可复用的 AI 工作流，覆盖从需求到交付的协作纪律——「Agent 说做完了不是证据，diff 加测试才是」。",
    tags: ["n8n", "OpenCode", "工作流", "协作纪律"],
    status: "工程化沉淀",
    link: { label: "项目区", href: "https://github.com/frankNULLblast/llm-agent-internship" },
  },
]

export type SkillGroup = {
  name: string
  items: { label: string; note: string }[]
}

export const skillGroups: SkillGroup[] = [
  {
    name: "大模型应用",
    items: [
      { label: "结构化输出", note: "JSON Schema 约束 + 四类异常兜底" },
      { label: "提示词工程", note: "输入/输出/模型/时间系统实验" },
      { label: "RAG 检索", note: "加载切分 / 关键词检索 / Embedding 基线" },
    ],
  },
  {
    name: "Agent 工程",
    items: [
      { label: "LangGraph", note: "固定五节点图，模型只管抽取" },
      { label: "MCP / Skills", note: "统一发现与调用外部工具" },
      { label: "Function Calling", note: "自定义工具 + 安全校验" },
    ],
  },
  {
    name: "后端服务化",
    items: [
      { label: "FastAPI + Pydantic", note: "请求/响应模型 + 测试契约" },
      { label: "Celery + RabbitMQ", note: "异步执行搬出 HTTP 请求" },
      { label: "幂等与终态", note: "Idempotency-Key / late ACK / 行锁" },
    ],
  },
  {
    name: "基础设施",
    items: [
      { label: "Linux", note: "裸金属装系统 / 权限 / 进程巡检" },
      { label: "容器与编排", note: "rootless Podman / K3s 两副本" },
      { label: "可观测性", note: "三种 ID 串证据链 / Golden Cases" },
    ],
  },
]

export const timeline = [
  { day: "Day 1–5", label: "调 API · 票据抽取 · 费用 CLI" },
  { day: "Day 6–11", label: "协作纪律 · Git 最小修复 · 测试审查" },
  { day: "Day 12–16", label: "Agent 入门 · Function Calling · MCP · 安全测试" },
  { day: "Day 17–21", label: "知识库问答 Agent · 10/10 验收 · 答辩" },
]

export const socials = [
  { label: "GitHub", href: "https://github.com/frankNULLblast" },
  { label: "Email", href: "mailto:puffed516@163.com" },
  { label: "实习仓库", href: "https://github.com/frankNULLblast/llm-agent-internship" },
]
