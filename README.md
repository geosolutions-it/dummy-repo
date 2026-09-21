# dummy-repo

Test repository for the GeoSolutions security scanning pipeline
([security-workflows](https://github.com/geosolutions-it/security-workflows)).

**The code here is vulnerable on purpose. Do not deploy it, and do not copy any
of it into a real project.**

It exists so the pipeline can be exercised against the real GitHub APIs rather
than a stand-in: a finding is planted, the pipeline is run, and the tracking
issue it opens is followed through its whole life, from first report to fix to
regression.

| File | Planted finding | Reported by |
| --- | --- | --- |
| `vulnerable.js` | command injection: user input concatenated into a shell command | CodeQL, `js/command-line-injection` |
| `package.json` | `lodash` pinned to a version with published advisories | Dependabot |

Both CodeQL and Dependabot alerts are enabled in the repository settings, the
same way they are on the scanned projects.
