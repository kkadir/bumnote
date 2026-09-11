{{- with .File }}{{ os.ReadFile (strings.TrimPrefix (printf "%s/" hugo.WorkingDir) .Filename) }}{{ else }}# {{ .Title }}

{{ .RawContent }}{{ end -}}
