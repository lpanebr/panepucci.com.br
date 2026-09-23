const CALLOUT_MARKER = /^\[!([\w-]+)\][ \t]*([^\n]*)(?:\n([\s\S]*))?$/;

function visit(node) {
  if (!node || typeof node !== 'object') return;

  if (node.type === 'blockquote') {
    const paragraph = node.children?.[0];
    const firstChild = paragraph?.type === 'paragraph' && paragraph.children?.[0];
    const match = firstChild?.type === 'text' && firstChild.value.match(CALLOUT_MARKER);

    if (match) {
      const [, rawType, title, remainingText] = match;
      const type = rawType.toLowerCase();
      const label = title.trim() || type;
      const rest = [];

      if (remainingText) rest.push({ type: 'text', value: remainingText });
      rest.push(...paragraph.children.slice(1));

      paragraph.children = [
        {
          type: 'strong',
          data: { hProperties: { className: ['callout-title'] } },
          children: [{ type: 'text', value: label }],
        },
        ...(rest.length ? [{ type: 'break' }, ...rest] : []),
      ];

      node.data = {
        ...node.data,
        hProperties: {
          ...node.data?.hProperties,
          className: ['callout', `callout-${type}`],
          'data-callout': type,
        },
      };
    }
  }

  if (Array.isArray(node.children)) {
    for (const child of node.children) visit(child);
  }
}

export default function remarkCallouts() {
  return (tree) => visit(tree);
}
