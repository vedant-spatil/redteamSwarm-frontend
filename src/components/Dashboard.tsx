interface Props {
  findings: any[]
  agents: any[]
}

export default function Dashboard({ findings, agents }: Props) {
  return (
    <section className="w-full mt-20 grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="liquid-glass rounded-3xl p-6 md:p-8">
        <h2 className="text-white text-2xl mb-6">
          Active Agents
        </h2>

        <div className="space-y-4">
          {agents.map((agent) => (
            <div
              key={agent.agent_id}
              className="flex items-center justify-between rounded-2xl bg-white/5 border border-white/10 px-5 py-4"
            >
              <div>
                <p className="text-white font-medium">
                  {agent.agent_id}
                </p>

                <p className="text-white/50 text-sm">
                  {agent.focus_area}
                </p>
              </div>

              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
            </div>
          ))}
        </div>
      </div>

      <div className="liquid-glass rounded-3xl p-6 md:p-8">
        <h2 className="text-white text-2xl mb-6">
          Vulnerability Findings
        </h2>

        <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
          {findings.map((finding, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white/5 border border-white/10 p-5"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase tracking-wider text-red-300">
                  {finding.severity}
                </span>

                <span className="text-xs text-white/40">
                  {finding.vuln_type}
                </span>
              </div>

              <p className="text-white text-sm leading-relaxed">
                {finding.description}
              </p>

              <p className="text-white/40 text-xs mt-4 break-all">
                {finding.url}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}