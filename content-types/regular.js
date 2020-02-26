module.exports = {
  handle: 'regular',
  documentType: 'article',
  info: {
    label: 'Regular Article'
  },
  components: [{
    name: 'title'
  }, {
    name: 'p'
  }, {
    name: 'p2'
  }, {
    name: 'image'
  }, {
    name: 'article-link'
  }, {
    name: 'portfolio-container'
  }, {
    name: 'complex-paragraph'
  }],
  editorWrapper: '<section class="container doc-section"></section>',
  defaultContent: [{
    component: 'title'
  }, {
    component: 'p'
  }],
  metadata: [{
    handle: 'category',
    type: 'li-category',
    ui: {
      component: 'liMetaSelectForm',
      label: 'Category',
      config: {
        placeholder: 'Select a category...'
      },
      service: 'categorySelection'
    }
  }, {
    handle: 'title',
    type: 'li-text',
    config: {
      maxLength: 200,
      useAsTitle: true
    },
    ui: {
      component: 'liMetaTextForm'
    }
  }, {
    handle: 'description',
    type: 'li-text',
    ui: {
      component: 'liMetaTextForm'
    }
  }, {
    handle: 'publishDate',
    type: 'li-publish-date',
    ui: {
      component: 'liMetaDatetimeForm',
      config: {
        label: 'Schedule publish date'
      }
    }
  }, {
    handle: 'teaserImage',
    type: 'li-image',
    ui: {
      component: 'liMetaImageForm'
    }
  }, {
    handle: 'dependencies',
    type: 'li-dependencies'
  }, {
    handle: 'proofreading',
    type: 'li-task-v2',
    config: {
      label: 'Proofreading',
      showInTaskList: true,
      isProofreading: true,
      updateLastProofreadRevision: true,
      requestDeadline: true,
      linkToDashboard: 'kanban-proofreading',
      setPriority: true,
      requested: {
        beforeLabel: 'Request proofreading',
        afterLabel: 'Proofreading requested'
      },
      accepted: {
        beforeLabel: 'Begin proofreading',
        afterLabel: 'Started with proofreading'
      },
      completed: {
        beforeLabel: 'Finish proofreading',
        afterLabel: 'Proofreading finished'
      },
      urgency: {
        high: {
          value: 2,
          unit: 'hours'
        }
      }
    }
  }, {
    handle: 'lastProofreadRevision',
    type: 'li-integer'
  }, {
    handle: 'routing',
    type: 'li-routing'
  }, {
    handle: 'slug',
    type: 'li-text',
    ui: {
      component: 'liMetaSlugForm',
      service: 'defaultSlug',
      label: 'URL Title',
      config: {
        placeholder: 'Set a title for the article\'s URL',
        canReset: true
      }
    }
  }, {
    handle: 'references',
    type: 'li-reference-list',
    config: {
      referenceType: 'documents',
      documentType: 'data-record',
      contentType: 'tag'
    },
    ui: {
      component: 'liMetaReferenceForm',
      label: 'tags'
    }
  }],
  editor: {
    ui: {
      showListAssignment: false
    },
    images: {
      whitelist: ['https://pixabay.com']
    },
    frontend: {}
  },
  routing: {
    enabled: true,
    pathPatterns: {
      type: 'article',
      current: '/:category-:id.html',
      legacy: []
    }
  },
  publicationIndex: {
    sortDate: {
      fieldName: 'publishDate',
      type: 'li-publish-date'
    }
  }
}
