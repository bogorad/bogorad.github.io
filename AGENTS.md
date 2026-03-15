# Main

Use Beads.
Use all functions of Serena-mcp.
Use agent-browser to check the result when required.
Never use /tmp/ - use ./temp/ instead.

# Temporary Beads workaround

If Beads commands fail with the cold-start `port 0` / circuit-breaker problem,
run `bd dolt start` first, then retry the `bd` command.

Temporary workaround flow:
- `bd dolt start`
- then run the needed `bd ...` command

This is a temporary repo-local workaround until the upstream Beads auto-start
bug is fixed.
