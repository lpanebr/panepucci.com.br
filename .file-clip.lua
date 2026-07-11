local function current_file_path()
  return vim.fn.expand("%:p")
end

local function is_sinapse_markdown()
  return current_file_path():match("/src/content/sinapses/[^/]+%.md$") ~= nil
end

local function current_slug()
  return vim.fn.expand("%:t:r")
end

local function project_root()
  return current_file_path():match("^(.-)/src/content/sinapses/[^/]+%.md$")
end

local function image_templates(template)
  local templates = {}

  for _, extension in ipairs({ "png", "jpg", "jpeg", "gif", "webp", "svg", "avif" }) do
    templates[extension] = template
  end

  return templates
end

return {
  custom = {
    {
      trigger = is_sinapse_markdown,
      dir_path = function()
        local root = project_root()
        local slug = current_slug()

        if not root or not slug then
          return "public/sinapses"
        end

        return root .. "/public/sinapses/" .. slug
      end,
      url_path = function()
        return "/sinapses/" .. current_slug()
      end,
      filetypes = {
        markdown = {
          template = "[$CURSOR]($FILE_PATH)",
          templates_by_extension = image_templates([[
<img
  src="$FILE_PATH"
  alt="$CURSOR"
  style="display:block; max-width:640px; width:100%; margin:2rem auto;"
/>
          ]]),
        },
      },
    },
  },
}
